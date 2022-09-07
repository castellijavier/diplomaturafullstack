const RecomendacionesPage = (props) => {
    return (
        <main>
            <h1 class="lecturas">Lectura Recomendada del Mes</h1>
            <div class="recomendadas">
                <div class="recomendada">
                    <img src="Img/Recomendaciones/Screenshot_20220708-004257_Gallery.jpg" alt="galeria"/>
                </div>

                <div class="recomendada">
                    <img src="Img/Recomendaciones/Screenshot_20220708-004232_Instagram.jpg" alt="ig"/>
                </div>

                <div class="recomendada">
                    <img src="Img/Recomendaciones/Screenshot_20220708-130049_Instagram.jpg" alt="ig2"/>
                </div>
            </div>
            
            <h3 class="info">Libro: Huellas de Tierra</h3>
            <h3 class="info">Autor: Matías Kremser</h3>
            <h3 class="info">Editorial: Julio Migno</h3>
            
        </main>
    );
}

export default RecomendacionesPage;