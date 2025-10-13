import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body || {};

    if (!phone && !email) {
      return NextResponse.json({ error: 'Phone or email required' }, { status: 400 });
    }

    const BOT_TOKEN = process.env.BOT_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json(
        { error: 'BOT_TOKEN and CHAT_ID must be set in .env.local' },
        { status: 500 }
      );
    }

    const text = `🔥 <b>Новая заявка с сайта</b>
👤 Имя: ${name || '-'}
📞 Телефон: ${phone || '-'}
✉️ Email: ${email || '-'}
💬 Сообщение: ${message || '-'}
🔗 trust-call.com`;

    const tgResp = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    const data = await tgResp.json();
    if (!data.ok) {
      console.error('Telegram error:', data);
      return NextResponse.json({ error: 'Telegram send error', details: data }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Server error:', e);
    return NextResponse.json({ error: 'Server error', details: String(e) }, { status: 500 });
  }
}
