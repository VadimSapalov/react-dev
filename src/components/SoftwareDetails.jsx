import { useParams, Link } from 'react-router-dom';
import { softwares } from '../data';

function SoftwareDetails() {
  const { id } = useParams();
  
  const software = softwares.find(s => String(s.id) === id);

  if (!software) {
    return <h2>Товар не знайдено</h2>;
  }

  return (
    <div className="container mt-5">
      <h1>{software.title}</h1>
      <p>{software.description}</p>
      <h3>Ціна: ${software.price}</h3>
      <Link to="/" className="btn btn-secondary">Назад до каталогу</Link>
    </div>
  );
}

export default SoftwareDetails;