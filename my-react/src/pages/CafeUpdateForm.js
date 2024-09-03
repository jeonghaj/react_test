

function CafeUpdateForm() {
    return (
        <>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/cafes">Cafe</Link></li>
                    <li className="breadcrumb-item active">Detail</li>
                </ol>
            </nav>
            <h3>글 수정 양식 입니다.</h3>

        </>
    );
}

export default CafeUpdateForm;