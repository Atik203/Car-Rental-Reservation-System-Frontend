import { useParams } from "react-router-dom";

const Booking = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>This is Booking component {id} </h1>
    </div>
  );
};

export default Booking;
