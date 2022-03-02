import React from 'react'

function CommentsModal() {
  return (
    <div className = 'comments-modal-container'>

<div className = "comments-title">
  <h1>  taskTitle  </h1>
  <a>Edit task</a>
</div>
<div>
  <h6>Date:</h6>
  <h6>Priority: high</h6>
</div>
<div className = "line"></div>
<div>
<h5>Name today at 10:25</h5>
</div>
    </div>
  )
}

export default CommentsModal
