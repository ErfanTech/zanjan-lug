addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Zanjan LUG</title>
      <style>
          body {
              font-family: 'Arial', sans-serif;
              background-color: #f4f4f4;
              color: #333;
              text-align: center;
              margin: 20px;
          }

          h1 {
              color: #0066cc;
          }

          p {
              font-size: 1.2em;
          }

          .event {
              background-color: #fff;
              border-radius: 10px;
              padding: 20px;
              margin: 20px 0;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .telegram-icon {
              width: 50px;
              height: 50px;
              margin-right: 5px;
          }
      </style>
      <!-- Add the link to the Telegram icon -->
      <link rel="icon" type="image/png" href="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/120px-Telegram_logo.svg.png">
  </head>
  <body>
      <h1>Zanjan Linux User Group</h1>
      <p> به وب‌سایت گروه کاربران لینوکس زنجان خوش آمدید. با ما متصل شوید، یاد بگیرید و رشد کنید</p>

      <div class="event">
          <h2>رویداد آتی</h2>
          <p><strong>تاریخ:</strong> بزودی</p>
          <p><strong>موضوع:</strong> معرفی توسعه متن باز</p>
          <p><strong>مکان:</strong>  زنجان</p>
      </div>

      <!-- Add the link to your Telegram group with an icon -->
      <a href="https://t.me/zanjan_lug" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/120px-Telegram_logo.svg.png" alt="Telegram" class="telegram-icon">
      </a>

      <p>منتظر ما بمانید تا رویدادها و گفتگوهای جذاب بیشتری برگزار شود</p>
  </body>
  </html>
`;

  return new Response(htmlContent, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  })
}
