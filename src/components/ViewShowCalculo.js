const ViewShowCalculo = ({ oddNumbers }) => {
    return (
        <div className="col-12 col-md-12 col-sm-12 col-lg-12">
            <p>
                <b>Números impares: </b>[{oddNumbers.join(', ')}]
            </p>
        </div>
    );
};

export default ViewShowCalculo;
