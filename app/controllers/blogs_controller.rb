class BlogsController < ApplicationController
  require 'loofah'


  #removing html tags
  def clean_content(raw_html)
    parser = Loofah.fragment(raw_html).scrub!(:prune)
    parser.text.gsub("\n", "")
  end

  #takes the data we got- grabs only the content of the blog and returns a new array with the different blog content
  def split_content_into_specific_elements (array)
        new_array = []
        array.map do |obj|
            new_array.push(clean_content(obj["content"]["rendered"])) 
        end
        return new_array
    end

    #takes the new array with the content, maps through and counts the words, it then adds the words 
    #to an object where the key is the word and the value is the number of times the word is seen
    def word_count (array) 
        word_object = {}
        array.each do |blog|
          clean_content(blog)
          blog.split(" ").each do |word|
            clean_word = word.downcase.gsub(/[^a-z0-9\s]/i, '')
            if word_object.key?(clean_word)
              word_object[clean_word] = word_object[clean_word] + 1
           else
             word_object[clean_word] = 1
           end
        end
      end
        return word_object
    end

    #action - sends back the array of blog content and the object of word counts
    def index 
      response = RestClient.get("https://www.internate.org/wp-json/wp/v2/posts?_fields[]=content&per_page=3")
      parsed_response = JSON.parse(response)

        final_array = []
        final_array.push(split_content_into_specific_elements(parsed_response))
        final_array.push(word_count(split_content_into_specific_elements(parsed_response)))
        render json: final_array , status: :ok

    end

end
