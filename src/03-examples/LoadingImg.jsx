export const LoadingImg = ({ data }) => {
  if (data !== null || data !== undefined) {
    return (
      <div className="card m-auto mt-5" style={{ maxWidth: "300px" }}>
        <img
          src={data.image}
          className="card-img-top w-100 m-auto"
          alt="image"
          style={{ maxHeight: "150px", objectFit: "cover" }}
        />
        <div className="card-body">
          <p className="card-text">
            Nombre: <span className="text-danger">{data.name}</span>
          </p>
        </div>
      </div>
    );
  } else {
    return <div className="alert alert-danger text-center">Error</div>;
  }
};
