export default ()=> 
  <div>
    Hello world!
    <p>sceond</p>
    <style jsx>{`
      p {
        color: blue;
      }
      div {
        background: red;
        display: flex;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
  </div>