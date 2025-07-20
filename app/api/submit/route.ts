export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const name = formData.get("name") as string
    const whatsapp = formData.get("whatsapp") as string
    const businessName = formData.get("businessName") as string
    const sheetName = formData.get("formGoogleSheetName") as string
    const email = formData.get("formGoogleSendEmail") as string

    const body = new URLSearchParams({
      name,
      whatsapp,
      businessName,
      formGoogleSheetName: sheetName,
      formDataNameOrder: JSON.stringify(["name", "whatsapp", "businessName"]),
      formGoogleSendEmail: email,
    })

    const scriptUrl = "https://script.google.com/macros/s/AKfycbxHGRDkAxO6lDR2WqrhlFxHsRspbbWBqrVpGhBk8WIAI6640UwlqEu89Up3-wpgPvACgw/exec"

    const googleRes = await fetch(scriptUrl, {
      method: "POST",
      body,
    })

    const resultText = await googleRes.text()

    if (!googleRes.ok) {
      return new Response(
        JSON.stringify({ success: false, message: resultText }),
        { status: googleRes.status }
      )
    }

    return new Response(JSON.stringify({ success: true, message: resultText }))
  } catch (error) {
    console.error("API Error:", error)
    return new Response(
      JSON.stringify({ success: false, error: "Something went wrong" }),
      { status: 500 }
    )
  }
}
