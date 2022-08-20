import React, {useEffect, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Navbar from '../../components/Home/Hero/Navbar';
import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import {AiOutlineClose} from 'react-icons/ai';
import Footer from '../../components/Home/Footer';
import {BsImageFill} from 'react-icons/bs';
import {CgCloseO} from 'react-icons/cg';
import {useSession} from 'next-auth/react';
import {userLoginContext} from '../../context/userLoginContext';
import {useContext} from 'react';
import Link from 'next/link';
import AuthenticatedScreen from '../../components/AuthenticatedScreen';

const AddProductforSell = () => {
  const [value, setValue] = React.useState ('1');
  const [title, setTitle] = React.useState ('');
  const [description, setDescription] = React.useState ('');
  const [shopID, setShopID] = React.useState ('');
  const [singleArtTag, setSingleArtTag] = React.useState ('');
  const [artTags, setArtTags] = React.useState ([]);
  const [mrp, setMRP] = React.useState (0);
  const [discount, setDiscount] = React.useState (0);
  const [sellingPrice, setSellingPrice] = React.useState (0);
  const [allFile, setAllFile] = React.useState ([{imageSrc: ''}]);
  const [selectedFile, setSelectedFile] = useState ('');
  const {data: session, status} = useSession ();

  const addArtTag = () => {
    const tags = [...artTags];
    if (singleArtTag === '') {
      alert ("Can't add empty Tag");
    } else {
      tags.push (singleArtTag);
      setArtTags (tags);
    }
    setSingleArtTag ('');
  };

  console.log(status)
  // console.log(mrp)

  const removeArtTag = index => {
    const tags = [...artTags];
    tags.splice (index, 1);
    setArtTags (tags);
  };

  const handleAddPrice = e => {
    setMRP (e.target.value);
  };

  const addDiscount = (dis, Mrp) => {
    // console.log (dis);
    if (dis >= 100) {
      alert ('Enter Discount Less than 100');
      setDiscount (0);
    } else {
      // console.log (mrp);
      const price = Mrp - Mrp * (dis * 0.01);
      setSellingPrice (price);
    }
  };

  useEffect (
    () => {
      addDiscount (discount, mrp);
    },
    [mrp, discount]
  );
  // console.log(validate)

  const ValidateVitalInfoForm = () => {
    if (
      title === '' ||
      description === '' ||
      shopID === '' ||
      artTags.includes ('') ||
      artTags.length === 0
    ) {
      return false;
    } else {
      return true;
    }
  };

  const ValidateOfferForm = () => {
    // console.log ('function called');
    if (mrp === 0 || discount < 0) {
      return false;
    } else {
      return true;
    }
  };

  const addImagetoPost = e => {
    const reader = new FileReader ();
    if (e.target.files[0]) {
      reader.readAsDataURL (e.target.files[0]);
    }

    reader.onload = readerEvent => {
      setSelectedFile (readerEvent.target.result);

      let images = [...allFile];
      images[images.length - 1].imageSrc = readerEvent.target.result;
      // console.log (images);
      setAllFile (images);
      // console.log (allFile, 'file');
    };
  };

  const handleAddMoreImage = () => {
    let images = [...allFile];
    images.push ({imageSrc: ''});
    setAllFile (images);
    // console.log (allFile);
  };

  const handleRemoveImage = index => {
    let image = [...allFile];
    image.splice (index, 1);
    setAllFile (image);
  };

  const ValidateImageForm = () => {
    if (!allFile.every (item => item.imageSrc) || allFile.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  // console.log (allFile);

  return (
    <div className="bg-[#0F0F0F]">
      <Navbar />
      {session
        ? <div className="max-w-[1280px] xl:mx-auto lg:mx-16 md:mx-8 mx-4">
            <div className="md:py-16 py-8 md:w-4/5 mx-auto">
              <TabContext value={value}>
                <Box
                  sx={{borderBottom: 1, borderColor: 'divider', color: 'white'}}
                >
                  <TabList
                    centered
                    // onChange={handleChange}
                    aria-label="lab API tabs example"
                    style={{justifyContent: 'space-between'}}
                  >
                    <Tab label="Important Information" value="1" />
                    <Tab label="Offers" value="2" />
                    <Tab label="Images" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className="bg-[#1b1b1b88] xl:px-16 lg:px-12 md:px-8 px-4 md:py-12 py-4 flex flex-col rounded-xl">
                    <form className="space-y-8 font-Roboto_flex">
                      <section className="md:grid-cols-4 grid-cols-1 grid md:space-x-4 font-Roboto_flex items-center">
                        <label className="text-[#F9DBB3] md:text-xl text-lg mb-2 md:mb-0">
                          Item Title
                        </label>
                        <input
                          type="text"
                          placeholder="Enter the title"
                          value={title}
                          className="col-span-3 bg-transparent px-4 py-3 focus:outline-none border border-[#f9dbb341] rounded-md text-white"
                          onChange={e => setTitle (e.target.value)}
                        />
                      </section>
                      <section className="md:grid-cols-4 grid-cols-1 grid md:space-x-4 font-Roboto_flex items-center">
                        <label className="text-[#F9DBB3] md:text-xl text-lg mb-2 md:mb-0">
                          Item Description
                        </label>

                        <textarea
                          type="text"
                          value={description}
                          placeholder="Enter  a brief description"
                          className="col-span-3 bg-transparent px-4 py-3 focus:outline-none border border-[#f9dbb341] rounded-md text-white"
                          onChange={e => setDescription (e.target.value)}
                        />
                      </section>
                      <section className="md:grid-cols-4 grid-cols-1 grid md:space-x-4 font-Roboto_flex items-center">
                        <label className="text-[#F9DBB3] md:text-xl text-lg mb-2 md:mb-0">
                          Shop ID
                        </label>
                        <input
                          type="text"
                          value={shopID}
                          placeholder="Your Shop id"
                          className="col-span-3 bg-transparent px-4 py-3 focus:outline-none border border-[#f9dbb341] rounded-md text-white"
                          onChange={e => setShopID (e.target.value)}
                        />
                      </section>
                      <section className="md:grid-cols-4 grid grid-cols-1 md:space-x-4 font-Roboto_flex items-center relative">
                        <label className="text-[#F9DBB3] md:text-xl text-lg mb-2 md:mb-0">
                          Tags
                        </label>
                        <div className="col-span-3 flex flex-col">
                          <input
                            type="text"
                            // value={singleArtTag}
                            placeholder="Add some tags"
                            className="bg-transparent px-4 py-3 focus:outline-none border border-[#f9dbb341] rounded-md text-white w-full"
                            onChange={e => setSingleArtTag (e.target.value)}
                          />
                          <div className="flex flex-wrap">
                            {artTags.map ((tag, index) => (
                              <span
                                className="bg-[#F9DBB3] font-medium w-fit px-3 py-2 rounded-full flex items-center ml-4 mt-4"
                                key={index}
                              >
                                {tag}
                                <AiOutlineClose
                                  className="ml-2 cursor-pointer"
                                  onClick={() => removeArtTag (index)}
                                />
                              </span>
                            ))}
                          </div>

                          {artTags.length >= 5
                            ? <span
                                className="bg-[#f9dbb380] text-black px-3 py-3 w-fit absolute right-0 rounded-tr-md rounded-br-md cursor-not-allowed"
                                disabled
                              >
                                Add
                              </span>
                            : <span
                                className="bg-[#F9DBB3] text-black px-3 py-3 w-fit absolute right-0 rounded-tr-md rounded-br-md cursor-pointer"
                                onClick={addArtTag}
                              >
                                Add
                              </span>}
                        </div>
                      </section>
                      <div className="w-full flex justify-center">
                        {!ValidateVitalInfoForm ()
                          ? <button
                              className="bg-[#f9dbb362] md:text-xl text-lg rounded-md px-4 py-2 mx-auto font-semibold cursor-not-allowed"
                              disabled
                            >
                              Next
                            </button>
                          : <button
                              className="bg-[#F9DBB3] md:text-xl text-lg rounded-md px-4 py-2 mx-auto font-semibold cursor-pointer"
                              onClick={() => setValue ('2')}
                            >
                              Next
                            </button>}
                      </div>
                    </form>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div className="bg-[#1b1b1b88] xl:px-16 lg:px-12 md:px-8 px-4 md:py-12 py-4 flex flex-col rounded-xl ">
                    <form className="space-y-8 font-Roboto_flex ">
                      <section className="md:grid-cols-4 grid-cols-1 grid md:space-x-4 font-Roboto_flex items-center ">
                        <label className="text-[#F9DBB3] md:text-xl text-lg mb-2 md:mb-0 ">
                          Your Price (MRP)
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            value={mrp}
                            placeholder="Enter Your Price"
                            className="col-span-3 bg-transparent pr-4 pl-8 py-3 focus:outline-none border border-[#f9dbb341] rounded-md text-white md:w-fit w-full appearance-none"
                            onChange={e => handleAddPrice (e)}
                          />
                          <span className="bg-[#F9DBB3] px-2 py-3 rounded-tl-md rounded-bl-md absolute left-0 top-0">
                            ₹
                          </span>
                        </div>
                      </section>
                      <section className="md:grid-cols-4 grid-cols-1 grid md:space-x-4 font-Roboto_flex items-center ">
                        <label className="text-[#F9DBB3] md:text-xl text-lg mb-2 md:mb-0">
                          Discount
                        </label>
                        <div className="relative md:w-44 w-full">
                          <input
                            type="number"
                            placeholder="Add Discount"
                            value={discount}
                            className="col-span-3 bg-transparent pl-4 py-3 focus:outline-none border border-[#f9dbb341] rounded-md text-white w-full"
                            onChange={e => {
                              setDiscount (e.target.value);
                              // addDiscount (discount);
                            }}
                          />
                          <span className="bg-[#F9DBB3] text-black px-2 py-3  absolute right-0 top-0 rounded-tr-md rounded-br-md">
                            %
                          </span>
                        </div>
                      </section>
                      <section className="md:grid-cols-4 grid-cols-1 grid md:space-x-4 font-Roboto_flex items-center ">
                        <label className="text-[#F9DBB3] md:text-xl text-lg mb-2 md:mb-0 ">
                          Selling Price
                        </label>
                        <div className="relative">

                          <input
                            type="number"
                            value={sellingPrice}
                            placeholder="Your Selling Price"
                            className="col-span-3 bg-transparent pr-4 pl-8 py-3 focus:outline-none border border-[#f9dbb341] rounded-md text-white md:w-fit w-full "
                          />
                          <span className="bg-[#F9DBB3] px-2 py-3 rounded-tl-md rounded-bl-md absolute left-0 top-0">
                            ₹
                          </span>
                        </div>
                      </section>
                      <div className="w-full grid grid-cols-2">
                        <button
                          className="bg-[#F9DBB3] md:text-xl text-lg rounded-md px-4 py-2 mx-auto font-semibold"
                          onClick={() => setValue ('1')}
                        >
                          Prev
                        </button>
                        {!ValidateOfferForm ()
                          ? <button
                              className="bg-[#f9dbb362] md:text-xl text-lg rounded-md px-4 py-2 mx-auto font-semibold cursor-not-allowed"
                              disabled
                            >
                              Next
                            </button>
                          : <button
                              className="bg-[#F9DBB3] md:text-xl text-lg rounded-md px-4 py-2 mx-auto font-semibold"
                              onClick={() => setValue ('3')}
                            >
                              Next
                            </button>}

                      </div>
                    </form>
                  </div>
                </TabPanel>
                <TabPanel value="3">
                  <div className="min-h-[40vh]">
                    <div className="bg-[#1b1b1b88] xl:px-16 lg:px-12 md:px-8 px-4 md:py-12 py-4 flex flex-col rounded-xl my-auto">
                      <h1 className="text-[#F9DBB3] text-sm">
                        *add maximum 5 images
                      </h1>
                      {/* <h1 className="text-white ">{allFile[0].imageSrc} sgsgs</h1> */}
                      {allFile.map (({imageSrc}, index) => {
                        return (
                          <div key={index} className="my-4">
                            {imageSrc !== ''
                              ? <div className="flex sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0 items-end flex-col">
                                  <img
                                    src={imageSrc}
                                    alt="null"
                                    className="sm:w-[90%]"
                                  />
                                  <CgCloseO
                                    className="text-[#F9DBB3] sm:text-3xl text-xl cursor-pointer"
                                    onClick={() => handleRemoveImage (index)}
                                  />
                                  {/* onClick={() => setSelectedFile (null)} */}
                                </div>
                              : <input
                                  type="file"
                                  accept="image/png, image/gif, image/jpeg"
                                  class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#f9dbb3be] hover:file:bg-[#F9DBB3]"
                                  onChange={e => addImagetoPost (e)}
                                />}
                          </div>
                        );
                      })}
                      <div className="w-full py-4">
                        {allFile.length !== 5
                          ? <span
                              className="font-medium cursor-pointer mx-auto bg-transparent border border-[#f9dbb3c9] px-3 py-2 rounded-full flex items-center text-white w-fit text-sm hover:bg-[#f9dbb32c]"
                              onClick={() => handleAddMoreImage ()}
                            >
                              <BsImageFill className="text-[#F9DBB3] text-2xl mr-4 cursor-pointer" />
                              Add More
                            </span>
                          : <button
                              disabled
                              className="font-medium cursor-not-allowed mx-auto bg-transparent border border-[#f9dbb3c9] px-3 py-2 rounded-full flex items-center text-white w-fit text-sm hover:bg-[#f9dbb32c]"
                              onClick={() => handleAddMoreImage ()}
                            >
                              <BsImageFill className="text-[#F9DBB3] text-2xl mr-4" />
                              Add More
                            </button>}
                      </div>
                      <div className="w-full grid grid-cols-2">
                        <button
                          className="bg-[#F9DBB3] md:text-xl text-lg rounded-md px-4 py-2 mx-auto font-semibold"
                          onClick={() => setValue ('2')}
                        >
                          Prev
                        </button>
                        {!ValidateImageForm ()
                          ? <button
                              className="bg-[#f9dbb362] md:text-xl text-lg rounded-md px-4 py-2 mx-auto font-semibold cursor-not-allowed"
                              disabled
                            >
                              Add Product
                            </button>
                          : <button className="bg-[#F9DBB3] md:text-xl text-lg rounded-md px-4 py-2 mx-auto font-semibold">
                              Add Product
                            </button>}

                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabContext>
            </div>
          </div>
        : <AuthenticatedScreen />}

      <Footer />
    </div>
  );
};

export default AddProductforSell;
