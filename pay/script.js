function generateUPILink() {
    const payeeVPA = document.getElementById('payeeVPA').value;
    const payeeName = document.getElementById('payeeName').value;
    const amount = document.getElementById('amount').value;
    const transactionNote = document.getElementById('transactionNote').value;

    // Basic validation
    if (!payeeVPA || !payeeName || !amount) {
        alert("Please fill in all required fields");
        return;
    }

    const psp = "ybl"; // Example PSP - you can change this 
    const url = "https://blr1.blynk.cloud/external/api/update?token=RdPZKZXEmB59iMaBP2EYH75mw8afKzY3&D4=1";

    const baseUPI = `upi://pay?pa=${payeeVPA}@${psp}&pn=${payeeName}&am=${amount}&cu=INR`;
    const encodedNote = transactionNote ? `&tn=${encodeURIComponent(transactionNote)}` : '';
    const encodedUrl = url ? `&url=${encodeURIComponent(url)}` : '';

    const upiLink = baseUPI + encodedNote + encodedUrl;

    // Display the link
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Generated UPI Link: <a href="${upiLink}" id="upiSubmit" target="_blank">${upiLink}</a></p>
                           <button id="openLinkButton">Open Link</button>`;

    // Add functionality to open the link in a new tab/window
    document.getElementById('openLinkButton').addEventListener('click', () => {
        window.open(upiLink, '_blank'); 
    });
}
