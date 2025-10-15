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
      console.error('❌ Missing BOT_TOKEN or CHAT_ID');
      return NextResponse.json(
        { error: 'BOT_TOKEN and CHAT_ID must be set in environment variables' },
        { status: 500 }
      );
    }

    const text = `
🔥 <b>Нова заявка з сайту</b>
👤 <b>Ім’я:</b> ${name || '-'}
📞 <b>Телефон:</b> ${phone || '-'}
✉️ <b>Email:</b> ${email || '-'}
💬 <b>Повідомлення:</b> ${message || '-'}
🔗 trust-call.com
`;

    console.log('📤 Sending to Telegram:', { BOT_TOKEN, CHAT_ID });

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

    let data;
    try {
      data = await tgResp.json();
    } catch {
      data = { ok: false, error: 'Invalid JSON from Telegram' };
    }

    // 💬 Добавляем лог ответа Telegram
    console.log('📩 Telegram response:', data);

    if (!data.ok) {
      return NextResponse.json({ error: 'Telegram send error', details: data }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('❌ /api/send error:', e);
    return NextResponse.json({ error: 'Server error', details: String(e) }, { status: 500 });
  }
}
