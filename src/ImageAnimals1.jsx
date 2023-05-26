const ImageAnimals1 = () => {

    const animals = {
        dog: 'https://humanidades.com/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg',
        cat: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
        fox: 'https://t1.uc.ltmcdn.com/es/posts/2/1/1/significado_del_zorro_como_animal_de_poder_48112_600.webp'
    }

    const imageAnimals = (e) => {
        const image = document.getElementById('image');
        image.src = e
    }

    return (
        <div>
            <button id='dog' onClick={() => imageAnimals(animals.dog)}>Dog</button>
            <button id='cat' onClick={() => imageAnimals(animals.cat)}>Cat</button>
            <button id='fox' onClick={() => imageAnimals(animals.fox)}>Fox</button>
            <img id='image' width='40%' height='40%' src='' ></img>
        </div>
    );
}
export default ImageAnimals1;