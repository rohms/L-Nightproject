import React, { useState } from 'react';
import "./Styles/Popup.css";
import AdminModal from './AdminModal';
import Modal from "react-modal";

Modal.setAppElement('#root')
const AdminPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        
    <div className="wholesigninpage">
            <div className="popupcontainer">
                <h1>Admin</h1>
                <button className="button" onClick={() => setModalIsOpen(true)} >Go to Login</button>
                <Modal className="mymodal" isOpen={modalIsOpen} shouldCloseOnOverlayClick={true} onClose={() => setModalIsOpen(false)} onRequestClose={() => setModalIsOpen(false)} style={
                    {   overlay: {backgroundColor: "grey"},
                        content: {color: "black"},
                    }
                }>
                <div className="close" onClick={() => setModalIsOpen(false)}><i class="far fa-times-circle" ></i></div>
                <AdminModal />

                </Modal>
            </div>
    </div>
        
    )
}

export default AdminPage;



// import React, { useState } from 'react';
// import "./Styles/Popup.css";
// import AdminModal from './AdminModal';
// import Modal from "react-modal";

// const AdminPage = () => {
//     const [isOpen, setIsOpen] = useState(true)
//     return (
        
//     <div className="wholesigninpage">
//             <div className="popupcontainer">
//                 <h1>Admin</h1>
//                 {/* <button className="button" onClick={() => setIsOpen(true)} >Login</button> */}
//                 <AdminModal  onClose={() => setIsOpen(false)}>
                
//                 </AdminModal>
//             </div>
            
//     </div>
        
//     )
// }

// export default AdminPage;
