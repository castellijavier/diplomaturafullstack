const ContactoPage = (props) => {
    return (
        <main>
            <h1 class="contactate">Contactate con Nosotros</h1>
            <div class="contactobox">
                <form action="" class="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="email">E-mail</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="consulta">Mensaje</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="ENVIAR"/>
                    </p>
                </form>
            </div>           
        </main>
    );
}

export default ContactoPage;