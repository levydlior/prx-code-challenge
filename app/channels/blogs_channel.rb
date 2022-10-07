class BlogsChannel < ApplicationCable::Channel
  require 'loofah'

    #function to temove html tags from a string
    def remove_html_tags(raw_html)
      parser = Loofah.fragment(raw_html).scrub!(:prune)
      parser.text.gsub("\n", "")
    end
   
    def word_count (post) 
        word_count_hash = {}
           remove_html_tags(post).split(" ").each do |word|
            clean_word = word.downcase.gsub(/[^a-z0-9\s]/i, '')
            if word_count_hash.key?(clean_word)
              word_count_hash[clean_word] = word_count_hash[clean_word] + 1
           else
             word_count_hash[clean_word] = 1
           end
      end
        return word_count_hash
    end
  
    #function to return an array with of objects of different blog post content, title and object with word count
    def split_content (array)
          returned_array = []
          array.each do |obj|
            blog_hash = {}
            blog_hash["title"] = obj["title"]["rendered"] 
            blog_hash["content"] = remove_html_tags(obj["content"]["rendered"])
            blog_hash["word_count"] = word_count(obj["content"]["rendered"])
            returned_array.push(blog_hash)
          end
          return returned_array
    end

      def send_data_to_frontend
        stream_from 'blogs_channel'
        response = RestClient.get("https://www.internate.org/wp-json/wp/v2/posts?per_page=3")
          parsed_response = JSON.parse(response)
          final_array = []
          final_array.push(split_content(parsed_response))

            ActionCable.server.broadcast 'blogs_channel', final_array         
            puts 'done' 
      end

      def interval seconds
        loop do
          yield
          sleep seconds
        end
      end
       
  def subscribed
    stream_from 'blogs_channel'
    interval 10 do
      send_data_to_frontend
    end
   
  end

  def unsubscribed
    
  end
end






