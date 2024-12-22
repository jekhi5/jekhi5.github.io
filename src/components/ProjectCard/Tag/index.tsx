const Tag = ({ tagName }: { tagName: string }) => {
  return (
    <span className="d-inline-block px-2 py-1 border border-dark rounded bg-secondary bg-gradient text-white me-2 mb-2">
      {tagName}
    </span>
  );
};

export default Tag;
