import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';

const MainPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Header */}
      <header className="bg-white flex items-center justify-between p-4 shadow-md ">
        <div className="text-2xl font-semibold text-purple-600">Miso Blogs</div>
        <div className="flex items-center space-x-4  ">
          
           <button className="text-gray-400 space-x-4  hover:text-purple-800 flex items-center ">
            <SearchIcon/>
            </button>
            <button className="text-gray-400 space-x-4  hover:text-purple-800 flex items-center">
            <NotificationsIcon/>
            </button>
            <button className="text-gray-400 space-x-4  hover:text-purple-800 flex items-center">
            <AccountCircleIcon/>
            
           </button>
         
         
        </div>
        
      </header>
    

      {/* Banner */}
      <div className="bg-gradient-to-r from-purple-200 to-purple-800 text-white text-center p-4 font-medium">
        Be part of a better internet. Get 20% off membership for a limited time
      </div>

    

      {/* Content */}
      <main className="p-4">
        {/* Article 1 */}
        <div className="border-b border-purple-300 py-4">
          <p className=" text-sm text-purple-400">Because you follow Politics</p>
          <div className="flex items-start space-x-4 mt-2">
            
            <div className="flex-1">
              <p className="font-semibold">Matthew Donnellan</p>
              <h2 className="text-lg font-bold">
                Trump’s Campaign is Failing Miserably
              </h2>
              <p className="text-gray-700">
                Trump has no answer for Kamala Harris and Tim Walz
              </p>
              <div className="flex items-center space-x-2 text-gray-500 mt-2">
                <span className="text-purple-400">1d ago</span>
                <span className="text-purple-400">•</span>
                <span className="text-purple-400"><FavoriteBorderIcon/><span> Liked By XYZ</span></span>
                <span className="text-purple-400">•</span>
                <span className="text-purple-400"><CommentIcon/> <span>1 Comment</span></span>
                <span className="text-purple-400"><SendIcon/> <span>1 Comment</span></span>
              </div>
            </div>
            <img
              src="https://via.placeholder.com/80"
              alt="Article Thumbnail"
              className="w-16 h-16 object-cover rounded-md"
            />
          </div>
        </div>

        {/* Article 2 */}
        <div className="border-b border-purple-300 py-4o">
          <p className="text-purple-400 text-sm">Because you follow Politics</p>
          <div className="flex items-start space-x-4 mt-2">
           
            <div className="flex-1">
              <p className="font-semibold">Ossiana Tepfenhart</p>
              <h2 className="text-lg font-bold">
                Hitler Was Right About This, And That’s Why MAGA Is Freaking Out
              </h2>
              <p className="text-gray-700">
                Does everyone forget the corollary of the Big Lie?
              </p>
              <div className="flex items-center space-x-2 text-gray-500 mt-2">
                <span  className="text-purple-400">1d ago</span>
                <span className="text-purple-400">•</span>
                <span className="text-purple-400"><FavoriteBorderIcon/><span> Liked By XYZ</span></span>
                <span className="text-purple-400">•</span>
                <span className="text-purple-400"><CommentIcon/> <span>1 Comment</span></span>
                <span className="text-purple-400"><SendIcon/> <span>1 Comment</span></span>
              </div>
            </div>
            <img
              src="https://via.placeholder.com/80"
              alt="Article Thumbnail"
              className="w-16 h-16 object-cover rounded-md"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
