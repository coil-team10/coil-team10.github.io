function testScam() {
    var msg = $("#message").val();
    
    $.ajax({   
        url: "https://scampredictor.azurewebsites.net//api/v1/spam/predict",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            message: msg 
        }),
        success: function(response) {
            scam_p = response.probabilities.spam
            verdict_str = ""
            if (scam_p < 0.1) {
                verdict_str = "<h3 style='color: green'>This text is likely not a scam</h3>"
            } else if (scam_p > 0.9) {
                verdict_str = "<h3 style='color: red'>This text is likely a SCAM</h3>"
            } else {
                verdict_str = "<h3 style='color: orange'>This text might be a scam</h3>"
            }
            $("#result").html(`${verdict_str}
            <h3>Scam probability: ${(scam_p * 100).toFixed(2)}%</h3>
            <p>IMPORTANT: This model does not guarantee anything! If you are uncertain, ask someone else what they think, or search the web to see if there are any ongoing scams like the message you received.</p>`)
        }
    });
}