export const sendContactForm = async (data: any) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    
  }).then((res) => {
    if (!res.ok) throw new Error("Impossibile inviare il messaggio. Ti preghiamo di riprovare più tardi.");
    return res.json();
  });