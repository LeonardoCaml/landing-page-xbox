type props = {
  contentText: string;
  style: string;
};

export default function Button({
  contentText,
  style
}: props) {
  return (
    <>
      <button
        className={`${style}`}
      >
        <p>{contentText}</p>
      </button>
    </>
  );
}
