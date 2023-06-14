const feedbackOpenButton = document.querySelectorAll(".button--chat--img");
const feedbackDialog = document.getElementById('feedback-dialog');
const feedbackCloseButton = document.querySelector('.feedback__close-btn');

export function feedbackDialogOpen() {
  for (let i=0; i<feedbackOpenButton.length; i++) {
    const variableValue = feedbackOpenButton[i];
    variableValue.addEventListener('click', () => {
      feedbackDialog.showModal();
    })
  };
};

export function feedbackDialogClose() {feedbackCloseButton.addEventListener('click', () => {
  feedbackDialog.close();
})
};