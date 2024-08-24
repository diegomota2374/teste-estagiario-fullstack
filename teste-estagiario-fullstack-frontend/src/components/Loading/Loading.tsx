import "./Loading.css";

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Carregando...</p>
    </div>
  );
};

export default Loading;
