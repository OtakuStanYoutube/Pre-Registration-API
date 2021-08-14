export const emailTemplate = () => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <title></title>
  
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: "Open Sans", sans-serif;
          background-color: #000000;
          color: white;
        }
  
        a {
          text-decoration: none;
          color: white;
          font-weight: bold;
        }
  
        .container {
          margin: 40px auto;
          width: 670px;
          border-radius: 40px;
          max-width: 800px;
          min-width: 500px;
          height: 100%;
          background-color: #000000;
          /* padding: 0 56px; */
        }
  
        .top{
            height: 100px;
        }
  
        .middle {
          text-align: left;
          font-size: 18px;
          font-weight: 600;
          line-height: 23px;
          height: 150px;
          letter-spacing: -0.05em;
        }
  
        .bottom {
          width: 100%;
          height: 70px;
          border-bottom-left-radius: 40px;
          border-bottom-right-radius: 40px;
        }
  
        img {
          width: 30px;
          height: 30px;
          margin-right: 15px;
        }
        .logo{
            width: 200px;
            height: 200px;
        }
        @media only screen and (max-width: 670px) {
          .container {
            width: 100%;
            max-width: 100% !important;
            height: 100vh;
          }
  
          .middle {
            font-size: 24px !important;
            font-weight: 400;
            line-height: 35px;
          }
        }
      </style>
    </head>
    <body
      style="
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        background-color: #000000;
        color: white;
      "
    >
      <table class="container">
        <tr class="top" align="center">
          <td>
            <img
              class="logo"
              src="https://raw.githubusercontent.com/OtakuStanYoutube/LinkedList/main/assets/logo/logo.png"
              alt="Twitter"
            />
          </td>
        </tr>
        <tr class="middle" align="center">
          <td>
            <p style="padding: 0 56px">
              Hello User,<br />
              Welcome to LinkedList. Just quickly wanted to thank you for
              registering for the close beta program of LinkedList. We are really
              glad to have you here. LinkedList is a platform dedicated to all the
              creators, designers, developers and social media influencers to host
              their proof of work.<br />
              Please have patience, we will be reaching out to you soon with lots
              of surprises. Meanwhile you can check us out on
              <a
                style="color: #b055e1"
                href="https://github.com/OtakuStanYoutube/LinkedList"
                ><u>GitHub</u></a
              >
              and
              <a style="color: #b055e1" href="https://twitter.com/LinkedList_"
                ><u>Twitter</u></a
              >.<br /><br />
              See you soon,<br />
              Team LinkedList
            </p>
          </td>
        </tr>
        <tr class="bottom" align="center">
          <td>
            <a href="https://twitter.com/LinkedList_"
              ><img
                src="https://github.com/OtakuStanYoutube/Pre-Registration-API/blob/main/images/twitter.png?raw=true"
                alt="Twitter"
            /></a>
            <a href="https://github.com/OtakuStanYoutube/LinkedList"
              ><img
                src="https://github.com/OtakuStanYoutube/Pre-Registration-API/blob/main/images/github.png?raw=true"
                alt="GitHub"
            /></a>
          </td>
        </tr>
      </table>
    </body>
  </html>  
  `;
};
