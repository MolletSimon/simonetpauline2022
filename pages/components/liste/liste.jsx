export default function Liste() {
    return (<div className="m-10 mb-0">
    <h1 className="font-brittany text-4xl md:text-7xl text-primary pt-20 text-center font-thin">Liste de mariage</h1>
    <p className="text-xl md:text-3xl font-montserratMedium mt-20 text-center tracking-wide">Trois choses que vous pouvez faire pour nous faire plaisir </p>
    <div className="flex items-center justify-center flex-col mt-10">
        <span className="font-montserratLight md:text-xl">*Un repas avec des sandwichs triangles</span>
        <span className="font-montserratLight md:text-xl">*Un repas avec des pizzas froides</span>
        <span className="font-montserratLight md:text-xl">*Des places pour aller voir le FC Rouen</span>
    </div>
    <p className="mt-10 font-montserratLight md:text-xl text-center">
        Sinon vous pouvez aussi nous faire plaisir en participant aux 
        frais de notre voyage de noces.</p>
        <br/>
        <div className="flex flex-col items-center">
            <p className="font-montserratLight md:text-xl text-center">Une urne sera à votre disposition le jour J, mais si vous le préférez vous pouvez également participer à la cagnotte en ligne en cliquant sur le bouton ci-dessous</p>
            <a target="blank" className="rounded-lg text-primary text-xl mt-6 md:text-3xl border-2 w-3/5 md:p-3 p-1 text-center" href="https://www.cotizup.com/simonetpauline2022">LIEN VERS LA CAGNOTTE</a>
        </div>
    
    <p className="mt-10 font-montserratLight md:text-xl text-center">Le décollage est prévu le 8 novembre 2022</p>
    <div className="flex justify-center">
    <img src="./images/pictoliste.png" className="md:max-w-[60%] md:visible invisible" alt="Voyage Ile Maurice" />

    </div>
    </div>)
}