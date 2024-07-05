import React, { useState } from 'react';
import './gallery.css';
const Gallery = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    document.getElementById('myModal').style.display = 'block';
  };

  const closeModal = () => {
    setModalContent(null);
    document.getElementById('myModal').style.display = 'none';
  };

  const images = [
    'https://images.prismic.io/xometry-marketing/e89bc459-be9a-433a-817a-43144ec91115_blue-pvc-pipes.jpg?auto=compress%2Cformat&rect=166%2C0%2C667%2C667&w=486&h=486&fit=max',
    'https://media.istockphoto.com/id/1427671762/photo/opened-pvc-window-in-room-at-apartment.jpg?s=612x612&w=0&k=20&c=YjAIhPrGDXaw8NntI73yv8jig0gwWkPxLbGfvnBBTjE=',
    'https://www.thoughtco.com/thmb/2rmdoQic1CH-Vu6HBbRUuXIXx20=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1077073172-962bef4821ef4b539eea70758bbdddf2.jpg',
    'https://i.pinimg.com/564x/ea/5e/e7/ea5ee7715493cf48035baed9adab353b.jpg',
    'https://5.imimg.com/data5/ST/YS/MY-48781291/pvc-panel.jpg',
    'https://www.nobroker.in/blog/wp-content/uploads/2022/02/PVC-False-Ceiling-Designs.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPHp4Lry9usYFZYk3QoJBleVvPVAvwt20YqQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKJIkzYnRxbS8cMGYdCD0DHSexedwkKOJrQ&s',
  ];


  return (
    <div>
      <h1>Our Products Gallery</h1>
      <hr />
      <div id="gallery" className="container-fluid">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            className="img-responsive"
            onClick={() => openModal(<img src={imageUrl} className="modal-img" alt="modal-img" />)}
          />
        ))}
        
      </div>

      {modalContent && (
        <div id="myModal" className="modal" role="dialog" style={{ display: 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                {modalContent}
                <button onClick={closeModal} className="btn btn-primary">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
