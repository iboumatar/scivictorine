import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  const { nom, email, telephone, sujet, message } = await request.json()

  if (!nom || !email || !sujet || !message) {
    return Response.json({ error: 'Champs requis manquants' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'SCI Victorine Immo <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Nouveau message du site — ${sujet}`,
      html: `
        <h2>Nouveau message depuis le formulaire de contact</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone || 'Non renseigné'}</p>
        <p><strong>Sujet :</strong> ${sujet}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: 'Échec de l\'envoi' }, { status: 500 })
  }
}
