import Container from "@/components/container"
import ImagePicker from "@/components/meals/image-picker"
import { shareMeal } from "@/lib/actions"

export default function ShareMealPage() {
  return (
    <Container>
      <div className="relative pt-36">
        <h1>Share your favorite meal</h1>

        <p>
          Or any other meal you feel needs sharing!
        </p>

        <div className="w-full mt-10 max-w-[550px] ">
          <form action={shareMeal}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                    Full Name
                  </label>
                  <input type="text" name="name" id="name" placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                    Email Address
                  </label>
                  <input type="email" name="email" id="email" placeholder="Enter your email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="title" className="mb-3 block text-base font-medium text-[#07074D]">
                Title
              </label>
              <input type="text" name="title" id="title" placeholder="Enter your meal title"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

            <div className="mb-5">
              <label htmlFor="summary" className="mb-3 block text-base font-medium text-[#07074D]">
                Short Summary
              </label>
              <input type="text" name="summary" id="date"
                placeholder="short summary"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

            <div className="mb-5">
              <label htmlFor="instructions" className="mb-3 block text-base font-medium text-[#07074D]">
                Instructions
              </label>

              <textarea
                name="textarea"
                id="instructions"
                cols={30}
                rows={10}
                placeholder="Puts instructions here"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <ImagePicker label="Your image" forName="image"  />
            </div>

            <div>
              <button
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Share Meal
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}