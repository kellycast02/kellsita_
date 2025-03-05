// Función para obtener seguidores en redes sociales (API simulada)
async function fetchFollowers() {
    try {
        // Reemplaza con APIs reales si las tienes
        const followers = {
            instagram: "120K",
            twitter: "55K",
            tiktok: "230K"
        };

        document.getElementById("instagram-followers").innerText = followers.instagram;
        document.getElementById("twitter-followers").innerText = followers.twitter;
        document.getElementById("tiktok-followers").innerText = followers.tiktok;
    } catch (error) {
        console.error("Error al obtener los seguidores:", error);
    }
}

// Cargar seguidores al iniciar la página
window.onload = fetchFollowers;
