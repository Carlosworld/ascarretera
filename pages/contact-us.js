import React from "react";
import Contacto from "../components/Contacto/Contacto";


export default function ContactUs() {
  return (
    <>
        <seccion className="seccion">
        <div className="contenedor">
            <h2 className="centrar-texto">Contacto</h2>
            <div className="grid centrar-columnas ">
                <div className="columnas-12">
                    <img src="images/01.jpg" alt="imagen contacto" width="100%" />
                </div>

                <div className="columnas-10 formulario-contacto">
                    <form action="#" className="contact-form">
                        <div className="campo">
                            <label for="nombre">Nombre</label>
                            <input type="text" id="nombre" className="name" placeholder="Tu Nombre" />
                        </div>
                        <div className="campo">
                            <label for="telefono">Teléfono</label>
                            <input type="tel" id="telefono" className="telefono" placeholder="Tu Telefono" />
                        </div>
                        <div className="campo">
                            <label for="email">E-Mail</label>
                            <input type="email" id="email" className="email" placeholder="Tu Correo Electrónico" />
                        </div>
                        <div className="campo mensaje">
                            <label for="mensaje">Mensaje</label>
                            <textarea id="mensaje" className="message"></textarea>
                        </div>
                        <div className="campo enviar">
                            <input type="submit" value="Enviar" className="btn-two btn-primario" />
                        </div>
                    </form>
                <Contacto />
                </div>
            </div>
        </div>
    </seccion>
    </>
  );
}
