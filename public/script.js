// Function to handle form submission and shorten URL
document.getElementById('shortenUrlForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const originalUrl = document.getElementById('originalUrlInput').value;
    try {
        const response = await fetch('/urls/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ originalUrl })
        });
        const data = await response.json();
        if (response.ok) {
            document.getElementById('shortenedUrl').innerHTML = `Shortened URL: <a href="${data.shortUrl}" class="shortened-url">${data.shortUrl}</a>`;
        } else {
            console.error('Error:', data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Function to retrieve original URL from shortened URL
document.addEventListener('click', async (e) => {
    if (e.target && e.target.matches('a.shortened-url')) {
        e.preventDefault();
        const shortUrl = e.target.getAttribute('href');
        try {
            const response = await fetch(`/urls/${encodeURIComponent(shortUrl)}`);
            const data = await response.json();
            if (response.ok) {
                document.getElementById('originalUrlContainer').textContent = `Original URL: ${data.originalUrl}`;
            } else {
                console.error('Error:', data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
});

// Function to generate QR code for a given short URL
document.getElementById('generateQRButton').addEventListener('click', async () => {
    const shortUrl = document.getElementById('shortUrlInput').value;
    try {
        const response = await fetch(`/urls/qr/${encodeURIComponent(shortUrl)}`);
        const qrCodeSvg = await response.text();
        document.getElementById('qrCodeContainer').innerHTML = qrCodeSvg;
    } catch (error) {
        console.error('Error:', error);
    }
});

// Function to fetch and display link history
async function fetchLinkHistory() {
    try {
        const response = await fetch('/urls');
        const data = await response.json();
        if (response.ok) {
            const linkHistoryDiv = document.getElementById('linkHistory');
            linkHistoryDiv.innerHTML = '';
            data.linkHistory.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${index + 1}. ${item.originalUrl}`;
                linkHistoryDiv.appendChild(listItem);
            });
        } else {
            console.error('Error:', data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the fetchLinkHistory function to display link history when the page loads
fetchLinkHistory();

// Function to fetch and display analytics for a given short URL
document.getElementById('getAnalyticsButton').addEventListener('click', async () => {
    const shortUrl = document.getElementById('analyticsShortUrlInput').value;
    try {
        const response = await fetch(`/urls/analytics/${encodeURIComponent(shortUrl)}`);
        const data = await response.json();
        if (response.ok) {
            document.getElementById('analyticsResult').textContent = `Total Clicks: ${data.clicks}`;
        } else {
            console.error('Error:', data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});