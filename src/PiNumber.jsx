const PiNumber = () => {

    const piNumbers = Math.PI.toFixed(20);

    return (
        <div>
            <h2>These are the first 20 numbers of pi:</h2>
                <p>{piNumbers}</p>
        </div>
    );
}

export default PiNumber;

