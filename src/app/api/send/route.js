import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, message } = body;

    if (!phone && !name) {
      return NextResponse.json({ error: 'Name or phone required' }, { status: 400 });
    }

    const BOT_TOKEN = process.env.BOT_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json(
        { error: 'BOT_TOKEN and CHAT_ID must be set in environment variables' },
        { status: 500 }
      );
    }

    const text = `
<b>Нова заявка з сайту</b>\n
👤 Ім'я: ${name}\n
📞 Телефон: ${phone}\n
💬 Повідомлення: ${message || '—'}
    `;

    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: 'HTML',
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Telegram API error: ${errorText}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('❌ Error sending Telegram message:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
