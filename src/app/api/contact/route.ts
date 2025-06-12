export async function POST(request: Request) {
  try {
    const { name, company, email, phone, message } = await request.json();

    const webhookUrl = "https://open.larksuite.com/open-apis/bot/v2/hook/a675d8bf-7cab-419f-887c-3161195187ec"
    if (!webhookUrl) {
      return new Response(JSON.stringify({ error: "Webhook URL not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const payload = {
      msg_type: "text",
      content: {
        text:
          "ライドジョブへの新しい問い合わせがありました！\n\n" +
          `名前: ${name}\n` +
          `会社: ${company}\n` +
          `メール: ${email}\n` +
          `電話: ${phone}\n` +
          `内容: ${message}\n`,
      },
    };

    const webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!webhookRes.ok) {
      console.error("Webhook error", await webhookRes.text());
      return new Response(JSON.stringify({ error: "Failed to send to webhook" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API /contact error", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
} 