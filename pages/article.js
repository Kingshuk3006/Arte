import React from 'react';
import ArticleCard from '../components/Article/ArticleCard';
import Navbar from '../components/Home/Hero/Navbar';
import Footer from '../components/Home/Footer';
import Modal from '@mui/material/Modal';
import useState from 'react';
import apiRoute from '../apiRoute';

const article = () => {
  const [open, setOpen] = React.useState (false);
  const [imageSrc, setImageSrc] = React.useState ();
  const [author, setAuthor] = React.useState ();
  const [heading, setHeading] = React.useState ();
  const [description, setDescription] = React.useState ();

  const handleOpen = () => setOpen (true);
  const handleClose = () => setOpen (false);
  var today = new Date ();

  var date =
    today.getFullYear () +
    '-' +
    (today.getMonth () + 1) +
    '-' +
    today.getDate ();

  async function handleOnSubmit (event) {
    event.preventDefault ();

    if (!author || !heading || !description || !imageSrc) {
      alert ('Please Fill Up all the fields');
      return;
    } else if (description.length < 50) {
      alert ('Please Add More descriptions');
      return;
    }

    const form = event.currentTarget;
    const fileInput = Array.from (form.elements).find (
      ({name}) => name === 'file'
    );

    const formData = new FormData ();
    for (const file of fileInput.files) {
      formData.append ('file', file);
    }
    formData.append ('upload_preset', 'ArteArticleImages');

    const data = await fetch (
      'https://api.cloudinary.com/v1_1/dqif4ddds/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    ).then (r => r.json ());

    setImageSrc (data.secure_url);

    let articleObj = {
      author: author,
      description: description,
      heading: heading,
      images: [{imageURL: data.secure_url}],
      dateofpublish: date,
    };

    const res = await fetch (`${apiRoute}/article`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify (articleObj),
    });
    handleClose ();

    alert ('Article Saved Successfully');
  }

  return (
    <div className="w-full overflow-x-hidden bg-[#0F0F0F]">
      <Navbar />
      <div className="max-w-[1280px] space-y-2 mx-auto">
        <div className="text-right md:px-16 px-8">
          <button
            className="border-2 border-[#A79376] font-semibold text-sm text-white px-4 py-2 rounded-md hover:bg-[#A79376] hover:text-black transition-all duration-300"
            onClick={handleOpen}
          >
            Add Article
          </button>
        </div>
        <div className="grid lg:grid-cols-7 grid-cols-1 mx-auto place-items-top gap-8 md:py-8 md:px-16 px-8 py-4 child:space-y-8 overflow-x-hidden ">
          <section className="lg:col-span-2">
            <ArticleCard /> <ArticleCard />
          </section>
          <section className="lg:col-span-3">
            <ArticleCard /> <ArticleCard />
          </section>
          <section className="lg:col-span-2">
            <ArticleCard /> <ArticleCard />
          </section>
        </div>
      </div>
      <Footer />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2c2c2c] md:w-[50vw] w-[80vw] space-y-4 p-4 rounded-lg">
          <h1 className="font-Playfair text-white text-2xl text-center font-semibold">
            New Article
          </h1>
          <form
            className="flex flex-col space-y-4 child:bg-transparent child:focus:outline-0 child:border-[#A79376] child:rounded-sm child:text-white child:border-2 placeholder:text-white child:px-4 child:py-2"
            method="post"
            onSubmit={handleOnSubmit}
          >
            <input
              type="text"
              placeholder="Auther Name"
              className="focus:outline-none"
              onChange={e => setAuthor (e.target.value)}
            />
            <input
              type="text"
              placeholder="Give it a heading.."
              className="focus:outline-none"
              onChange={e => setHeading (e.target.value)}
            />
            <textarea
              rows="6"
              Placeholder="Your Article.."
              className="focus:outline-none"
              onChange={e => setDescription (e.target.value)}
            />
            <input
              type="file"
              name="file"
              className="focus:outline-none block file:border-0 file:text-black file:rounded-md file:bg-[#A79376]"
              onChange={e => setImageSrc (e.target.value)}
            />
            <div className="text-center border-none">
              <input
                type="submit"
                className="bg-[#A79376] text-black rounded-md px-4 py-2 font-semibold"
              />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default article;
