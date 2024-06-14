function showModal(event)   {
    const modal = document.getElementById('artworkModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = event.target.src;
    $(modal).modal('show');
}

function deleteArtwork(event)   {
    const artworkDiv = event.target.closest('.col');
    artworkDiv.remove();
}

document.addEventListener("DOMContentLoaded", function() {
    const obrasdearte = document.querySelectorAll(".obradearte");
    const deleteButtons = document.querySelectorAll(".delete-button");

    obrasdearte.forEach(function(obradearte)    {
        obradearte.addEventListener('click', showModal);

    });

    deleteButtons.forEach(function(button)  {
            button.addEventListener('click', deleteArtwork);
    });
});