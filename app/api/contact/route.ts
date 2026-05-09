import { NextResponse } from 'next/server';

type Body = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

function trimStr(s: unknown, max: number): string {
  if (typeof s !== 'string') return '';
  return s.trim().slice(0, max);
}

export async function POST(req: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json(
      {
        error:
          'Contact form is not configured. Set WEB3FORMS_ACCESS_KEY (see .env.example) to enable submissions.'
      },
      { status: 503 }
    );
  }

  let json: Body;
  try {
    json = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const name = trimStr(json.name, 120);
  const email = trimStr(json.email, 254);
  const company = trimStr(json.company, 200);
  const message = trimStr(json.message, 8000);

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    '',
    'Message:',
    message
  ].filter(Boolean);

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `[Prodigy site] Message from ${name}`,
      from_name: name,
      email,
      message: lines.join('\n')
    })
  });

  const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };

  if (!res.ok || !data.success) {
    return NextResponse.json(
      { error: data.message || 'Failed to send message. Please try again or email us directly.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
