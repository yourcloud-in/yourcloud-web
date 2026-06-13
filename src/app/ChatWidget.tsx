'use client'

import { useState, useRef, useEffect } from 'react'
import { useReducedMotion } from 'motion/react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  time: string
}

const SYSTEM_PROMPT = `You are GravRel's helpful AI assistant on the website gravrelaetherops.com.

GravRel is India's first solar-powered, DPDP-compliant cloud infrastructure platform.
Built and operated from Bhubaneswar, Odisha by Babrit Behera (Founder & CEO).

Key facts:
- 60% cheaper than AWS
- 100% solar powered, zero carbon emissions
- DPDP Act 2023 compliant from day one
- Data never leaves India (physically in Bhubaneswar)
- CEO personally reachable at ceo@gravrel.com
- UDYAM registered: UDYAM-OD-03-0020346

Services and pricing (+ 18% GST):
- Cloud VMs: Rs 199 - Rs 3,999/mo
- Managed Databases: Rs 499 - Rs 5,999/mo
- Kubernetes: Rs 999 - Rs 14,999/mo
- Object Storage: Rs 199 - Rs 999/mo
- ML/GPU Environments: Rs 999 - Rs 4,999/mo
- LLM Playground: Free / Rs 499 / Rs 999/mo

Current offer: 3 months FREE beta for STPI Bhubaneswar companies.

Be friendly, concise and helpful. Keep responses under 3 sentences unless more detail is needed.
If someone wants to sign up or talk to Babrit, direct them to ceo@gravrel.com or console.gravrelaetherops.com/register.`

const QUICK_REPLIES = ['Pricing', 'Free beta', 'DPDP compliance', 'Talk to Babrit']

const getTime = () => new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })

export default function ChatWidget() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState<{ role: string; content: string }[]>([])
  const [badge, setBadge] = useState(true)
  const messagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages, loading])

  const openChat = () => {
    setOpen(true)
    setBadge(false)
    if (messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          id: '0',
          role: 'assistant',
          content: "Hi! 👋 I'm GravRel's AI assistant. Ask me anything about our solar-powered cloud — pricing, DPDP compliance, or how to get started!",
          time: getTime(),
        }])
      }, 300)
    }
  }

  const send = async (text: string) => {
    if (!text.trim() || loading) return
    setInput('')

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text.trim(), time: getTime() }
    const newHistory = [...history, { role: 'user', content: text.trim() }]
    setMessages(prev => [...prev, userMsg])
    setHistory(newHistory)
    setLoading(true)

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY || '',
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 512,
          system: SYSTEM_PROMPT,
          messages: newHistory,
        }),
      })

      const data = await res.json()
      const reply = data.content?.[0]?.text || "I'm having trouble connecting. Please email ceo@gravrel.com directly."

      const botMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: reply, time: getTime() }
      setMessages(prev => [...prev, botMsg])
      setHistory(prev => [...prev, { role: 'assistant', content: reply }])
    } catch {
      const errMsg: Message = {
        id: (Date.now() + 1).toString(), role: 'assistant',
        content: "I'm having trouble connecting. Please email ceo@gravrel.com or try again shortly.",
        time: getTime(),
      }
      setMessages(prev => [...prev, errMsg])
    }

    setLoading(false)
  }

  return (
    <>
      {/* Chat Window — bottom LEFT */}
      {open && (
        <div style={{
          position: 'fixed', bottom: 96, left: 24,
          width: 360, height: 520,
          background: '#0A1628',
          border: '1px solid rgba(29,158,117,0.25)',
          borderRadius: 20,
          boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden', zIndex: 9997,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          transition: reduce ? 'none' : 'opacity 0.25s',
        }}>
          {/* Header */}
          <div style={{
            background: '#0D2137', padding: '14px 16px',
            display: 'flex', alignItems: 'center', gap: 10,
            borderBottom: '1px solid rgba(29,158,117,0.15)',
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: '50%',
              background: '#1D9E75', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontSize: 14, fontWeight: 800, color: '#fff', flexShrink: 0,
            }}>G</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>GravRel Assistant</div>
              <div style={{ fontSize: 11, color: '#1D9E75', display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#1D9E75', display: 'inline-block' }} />
                Solar-powered · Always online
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{
              background: 'none', border: 'none', color: '#4A6F8A',
              cursor: 'pointer', fontSize: 18, lineHeight: 1,
            }}>×</button>
          </div>

          {/* Messages */}
          <div ref={messagesRef} style={{
            flex: 1, overflowY: 'auto', padding: 14,
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            {messages.map(msg => (
              <div key={msg.id} style={{
                display: 'flex', gap: 8,
                alignItems: 'flex-end',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                {msg.role === 'assistant' && (
                  <div style={{
                    width: 24, height: 24, borderRadius: '50%',
                    background: '#1D9E75', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: 10, fontWeight: 800, color: '#fff', flexShrink: 0,
                  }}>G</div>
                )}
                <div style={{ maxWidth: '78%' }}>
                  <div style={{
                    padding: '9px 13px', borderRadius: 14, fontSize: 13, lineHeight: 1.5,
                    background: msg.role === 'user' ? '#1D9E75' : '#0D2137',
                    color: msg.role === 'user' ? '#fff' : 'rgba(255,255,255,0.88)',
                    border: msg.role === 'assistant' ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    borderBottomLeftRadius: msg.role === 'assistant' ? 4 : 14,
                    borderBottomRightRadius: msg.role === 'user' ? 4 : 14,
                  }}>{msg.content}</div>
                  <div style={{
                    fontSize: 10, color: '#4A6F8A', marginTop: 3,
                    textAlign: msg.role === 'user' ? 'right' : 'left',
                  }}>{msg.time}</div>
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
                <div style={{
                  width: 24, height: 24, borderRadius: '50%',
                  background: '#1D9E75', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, fontWeight: 800, color: '#fff',
                }}>G</div>
                <div style={{
                  padding: '10px 14px', background: '#0D2137', borderRadius: 14,
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', gap: 4,
                }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{
                      width: 6, height: 6, borderRadius: '50%', background: '#1D9E75',
                      animation: `bounce 1.2s ${i * 0.2}s infinite`,
                    }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick replies */}
          {messages.length <= 1 && !loading && (
            <div style={{ padding: '6px 12px', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {QUICK_REPLIES.map(q => (
                <button key={q} onClick={() => send(q)} style={{
                  padding: '5px 10px', borderRadius: 20, fontSize: 11, fontWeight: 600,
                  background: 'rgba(29,158,117,0.1)', border: '1px solid rgba(29,158,117,0.3)',
                  color: '#1D9E75', cursor: 'pointer',
                }}>{q}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: '10px 12px', borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', gap: 8, alignItems: 'flex-end',
            background: '#0D2137',
          }}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input) } }}
              placeholder="Ask about GravRel..."
              rows={1}
              style={{
                flex: 1, background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10, padding: '8px 12px',
                color: '#fff', fontSize: 13, resize: 'none',
                outline: 'none', fontFamily: 'inherit', maxHeight: 80,
              }}
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim() || loading}
              style={{
                width: 34, height: 34, borderRadius: 8,
                background: '#1D9E75', border: 'none',
                color: '#fff', fontSize: 16, cursor: 'pointer',
                opacity: !input.trim() || loading ? 0.5 : 1,
              }}
            >↑</button>
          </div>

          <div style={{ textAlign: 'center', fontSize: 10, color: '#2A4A3A', padding: '6px 0' }}>
            GravRel AI · gravrelaetherops.com · Bhubaneswar ☀️
          </div>
        </div>
      )}

      {/* Toggle Button — bottom LEFT */}
      <button
        onClick={open ? () => setOpen(false) : openChat}
        style={{
          position: 'fixed', bottom: 28, left: 24,
          width: 56, height: 56, borderRadius: '50%',
          background: '#1D9E75', border: 'none',
          cursor: 'pointer', zIndex: 9998,
          boxShadow: '0 8px 32px rgba(29,158,117,0.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22,
          transition: reduce ? 'none' : 'transform 0.2s',
        }}
        aria-label="Open GravRel chat"
      >
        {open ? '×' : '💬'}
      </button>

      {/* Unread badge */}
      {badge && !open && (
        <div style={{
          position: 'fixed', bottom: 72, left: 60,
          background: '#E65100', color: '#fff',
          fontSize: 10, fontWeight: 800,
          width: 18, height: 18, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999,
        }}>1</div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  )
}
