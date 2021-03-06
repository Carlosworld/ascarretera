import React from 'react';

const Contacto = () => {
    return (
        <div>
              <section class="contenedor seccion">
                <h2 class="fw-300 centrar-texto">Contáctanos</h2>
                {/* <!-- <div id="mapa" class="mapa"></div> --> */}
                <p>Dirección: Nicolás Bravo 341, Centro, Cd. L. Cárdenas, Mich., MX.</p>
                <p>Teléfonos: +52 (753) 537 3761, +52 (753) 139 7277 y +52 (753) 540 5810. </p>
                <p>Correo: 
                    <a href="mailto:info@ascarretera.com">{" "}
                        info@ascarretera.com
                    </a><br/>
                    <a href="mailto:info@unionmigrante.com">
                        info@unionmigrante.com
                    </a>
                </p>

                 {/* <nav class="redes-sociales">
                        <a target="_blank" href="https://www.facebook.com/AlbercasLC/"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=7531683407&amp;text=Hola!&nbsp;me&nbsp;pueden&nbsp;apoyar?"><i class="fab fa-whatsapp" aria-hidden="true"></i></a>
                        <a target="_blank" href="https://www.instagram.com/friopolarhl/"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                </nav>  */}
            </section>
        </div>
    );
}

export default Contacto;
