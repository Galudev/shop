import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { useParams } from "react-router-dom";
import { getFurnitureList } from "../../helpers";
import { useShoppingBasketStore, useFurnitureStore } from "../../hooks";


export const ItemDetails = () => {

    const { id } = useParams();
    const { furnitureList } = useFurnitureStore();
    const { getFurnitureById } = getFurnitureList(furnitureList);

    const refContainer = useRef(null);
    const refText = useRef(null);

    const [widthContainer, setWidthContainer] = useState(0);
    const [widthText, setWidthText] = useState(0);
    useLayoutEffect(() => {
        setWidthContainer(refContainer.current.offsetWidth);
        setWidthText(refText.current.offsetWidth);
    }, []);

    const furniture = getFurnitureById(id);

    const { startAddingItem } = useShoppingBasketStore()

    const onClickAdd = () => {
        startAddingItem(furniture._id);
    }

    return (
        <div className="container">
            <span className="card-title fs-2 d-inline text-truncate invisible" ref={refText}>{furniture.name}</span>

            <div className="card mb-2 mt-2">
                <div className="row g-0">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-4 d-flex align-items-center justify-content-center">
                        <img src={furniture.img} className="img-fluid rounded-start p-2" alt={furniture.name} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-8 card-body p-4 m-0 d-flex justify-content-between flex-column">
                        <div className="row">
                            <div className="marquee" ref={refContainer}>
                                <Marquee gradient={false} play={widthContainer < widthText}>
                                    <span className="card-title fs-2">{furniture.name}</span>
                                    &nbsp; &nbsp; &nbsp;
                                </Marquee>
                            </div>
                            <p className="card-text fs-5 mb-2">{`${furniture.price.toFixed(2)}€`}</p>
                            <p className="card-text mb-2">{furniture.description}</p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <button
                                className="btnSubmit contact-button mt-4 mb-5"
                                onClick={onClickAdd}
                            >
                                Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
