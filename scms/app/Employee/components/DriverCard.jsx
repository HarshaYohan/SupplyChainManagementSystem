import "../../../styles/employee/DriverCard.css";
import Link from 'next/link';
import { FaCheckCircle, FaTasks, FaUserCircle } from 'react-icons/fa'; // Icons from react-icons

export default function Card2({ title, background, link, iconType }) {
  // Icon handling based on prop
  const renderIcon = () => {
    switch (iconType) {
      case "new":
        return <FaTasks className="cardIcon" />;
      case "finished":
        return <FaCheckCircle className="cardIcon" />;
      case "mywork":
        return <FaUserCircle className="cardIcon" />;
      default:
        return null;
    }
  };

  return (
    <Link href={link} passHref>
      <div className="card" style={{ background }}>
        {renderIcon()}
        <h2 className="title">{title}</h2>
      </div>
    </Link>
  );
}
