import React from 'react'

function Footer() {
  return (
    <section id="footer">
        <div className="container-fluid foot py-5" id="Contact" data-aos="fade-up">
            <div className="container">
                <h1 className="black">Want To Reach Out?</h1>
                <p className="black">isiahmslater@gmail.com</p>
                <p className="black">660-956-5691</p>
                <div className="btn-group">
                    <a href="https://twitter.com/awesopossum" className="borders">
                    <button type="button"className="btn btn-light black ">Twitter</button>
                    </a>
                    <a href="https://www.instagram.com/awesopossum/" className="borders">
                    <button type="button"className="btn btn-light black">Instagram</button>
                    </a>
                    <a href="mailto:isiahmslater@gmail.com" className="borders" style="border-right: solid 1px black;">
                    <button type="button"className="btn btn-light black">Email</button>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer