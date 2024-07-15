const Message = ({ message }) => {
  return (
    <div className={`chat chat-end`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={
              "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fblank-profile-pic&psig=AOvVaw35fZodInWtKZ0Ez41K2a7f&ust=1721077543535000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDDztG3p4cDFQAAAAAdAAAAABAE"
            }
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hey, How's its going?</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:42
      </div>
    </div>
  );
};
export default Message;
