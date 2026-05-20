import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message, phone } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Name, email, and message are required' }, { status: 400 });
    }

    // Forward to API backend which handles email via Brevo
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.yourcloud.in';

    const response = await fetch(`${apiUrl}/api/v1/support/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, company, message, phone }),
    });

    if (!response.ok) {
      // Fallback: just forward to CEO email via Brevo directly
      const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': process.env.BREVO_API_KEY || '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: 'YourCloud Contact Form', email: 'noreply@yourcloud.in' },
          to: [{ email: 'ceo@yourcloud.in', name: 'Babrit Behera' }],
          subject: `Contact form: ${name} — ${company || 'no company'}`,
          htmlContent: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || '—'}</p>
            <p><strong>Phone:</strong> ${phone || '—'}</p>
            <hr/>
            <p>${message.replace(/\n/g, '<br/>')}</p>
          `,
        }),
      });

      if (!brevoRes.ok) {
        return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true, message: 'Message sent! We will respond within 24 hours.' });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
