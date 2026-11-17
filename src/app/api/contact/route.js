import { NextResponse } from "next/server";

// Optional WhatsApp automation: forwards contact-form messages to YOUR WhatsApp
// using Meta's WhatsApp Cloud API. Needs the env vars in .env.example.
export async function POST(req) {
  const { name, topic, message } = await req.json().catch(() => ({}));
  if (!name || !message) {
    return NextResponse.json({ ok: false, error: "Name and message are required." }, { status: 400 });
  }

  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const owner = process.env.OWNER_WHATSAPP_NUMBER;

  if (!token || !phoneId || !owner) {
    // Not configured: the browser falls back to a wa.me chat link
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch(`https://graph.facebook.com/v20.0/${phoneId}/messages`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: owner,
        type: "text",
        text: { body: `New portfolio message\nFrom: ${name}\nTopic: ${topic || "General"}\n\n${message}` },
      }),
    });
    return NextResponse.json({ ok: true, delivered: res.ok });
  } catch {
    return NextResponse.json({ ok: true, delivered: false });
  }
}
