class BlogsController < ApplicationController
  #removing html tags
  def clean_content(raw_html)
    html = raw_html.encode('UTF-8', invalid: :replace, undef: :replace, replace: '', universal_newline: true).gsub(/\P{ASCII}/, '')
    parser = Nokogiri::HTML(html, nil, Encoding::UTF_8.to_s)
    parser.xpath('//script')&.remove
    parser.xpath('//style')&.remove
    parser.xpath('//text()').map(&:text).join(' ').squish
  end

  #takes the data we got- grabs only the content of the blog and returns a new array with the different blog content
  def split_content_into_spesific_elemnts (array)
        new_array = []
        array.map do |obj|
            new_array.push(obj["content"]["rendered"]) 
        end
        return new_array
    end

    #takes the new array with the content, maps through and counts the words, it then adds the words 
    #to an object where the key is the word and the value is the number of times the word is seen
    #also removes any non letter punctionation -- problem- places where the tags weren't fully removed the words have combined
    def word_count (array) 
        word_object = {}
        array.each do |blog|
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

        blogs_array = JSON.parse(clean_content(response))
        final_array = []
        final_array.push(split_content_into_spesific_elemnts(JSON.parse(response)))
        final_array.push(word_count(split_content_into_spesific_elemnts(blogs_array)))
        render json: final_array , status: :ok
    end

end
