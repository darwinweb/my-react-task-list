import React from 'react'

const SobreNosotros = () => {
  return (
    <div className='container-about'>
        <header>
            <h1>Todo App</h1>
            <p>Una aplicación para gestionar tus tareas y listas de quehaceres.</p>
        </header>

        <section>
            <h2>Producto y Propósito:</h2>
            <p>Esta aplicación se ha diseñado para ayudar a las personas a administrar sus tareas y listas de quehaceres de manera sencilla y eficiente.</p>
            <p>Su propósito principal es servir como una herramienta de organización personal que permite a los usuarios registrar, editar, eliminar y realizar un seguimiento de sus tareas, incluyendo la capacidad de marcar tareas como completadas.</p>
        </section>

        <section>
            <h2>Funcionalidades Clave:</h2>
            <ul>
                <li>Añadir Tareas: Los usuarios pueden agregar nuevas tareas...</li>
                <li>Editar Tareas: Los usuarios pueden editar el texto de sus tareas existentes...</li>
                <li>Eliminar Tareas: Los usuarios pueden eliminar tareas que ya no son relevantes...</li>
                <li>Marcar Tareas como Completadas: Los usuarios pueden marcar sus tareas como completadas...</li>
                <li>Almacenamiento Local: La aplicación utiliza almacenamiento local (localStorage)...</li>
            </ul>
        </section>

        <section>
            <h2>¿Por qué los usuarios usarían esta aplicación?</h2>
            <ul>
                <li>Organización: Les permite mantener un registro claro de todas sus tareas pendientes...</li>
                <li>Sencillez: La aplicación es fácil de usar...</li>
                <li>Accesibilidad: Como una aplicación web, los usuarios pueden acceder a ella desde cualquier dispositivo...</li>
                <li>Persistencia: La capacidad de almacenar tareas localmente garantiza que los usuarios no perderán sus datos...</li>
                <li>Flexibilidad: La aplicación es versátil y puede adaptarse a las necesidades de cualquier usuario...</li>
            </ul>
        </section>
        <section>
            <h2>Tecnologías Utilizadas</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </section>
    </div>
  )
}

export default SobreNosotros