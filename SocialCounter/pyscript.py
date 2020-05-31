#instagram stats

import urllib.request
import urllib.parse
import re
import json

#from fire import *

class instagram(object):
    def __init__(self):
        jsonfile_read = open('info.json', 'r')
        jsondata = jsonfile_read.read()
        obj = json.loads(jsondata)
        instagram_handle = str(obj['handle'])

        try: 
            #instagram_handle = input('instagram name --->')
            x = urllib.request.urlopen('https://www.instagram.com/' + instagram_handle + '/') #saves the raw html page to the variable
            html = x.read()
            iso_info = re.findall(r'<meta content(.*?)- See Instagram photos', str(html)) #using regex to isolate the needed part of the HTML
            info = str(iso_info)
            followers = re.findall(r'"(.*?) Followers', info)
            following = re.findall(r', (.*?) Following', info)
            posts = re.findall(r'Following, (.*?) Posts', info)
            followers_2 = str(followers[0])
            following_2 = str(following[0])
            posts_2 = str(posts[0])
            #print('followers =',followers_2, ',', 'following =', following_2, ',','posts =',posts_2)
            
                
        except Exception as e:
            print(e)
            print('this is not a valid instagram handle')

       
        

        obj["followers"] = followers_2
        obj["following"] = following_2
        obj["posts"] = posts_2

        with open('info.json', 'w') as outfile:
            json.dump(obj, outfile)
    
  

if __name__ == '__main__':
   info = instagram()

