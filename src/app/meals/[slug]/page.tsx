const SubPage = ({ params }: { params: { slug: string } }) => {
  return <h1>{`meals/${params.slug}`}</h1>;
};

export default SubPage;
