import { mount } from "@vue/test-utils"
import { flushPromises  } from "@vue/test-utils"

import {describe, expect, it, vi} from "vitest";
import Pets from "./Pets.vue";
import PetService from "@/services/PetService"

describe("Tela Home", () => {

    vi.spyOn(PetService, 'getAllPets').mockResolvedValue([
    {
        id: 16,
        pet_name: "Dog",
        age: 12
    },
    {
        id: 15,
        pet_name: "Cat",
        age: 2
    }
    ])

    it("Espera-se que a tela seja renderizada", ()=>{
        const component = mount(Pets)

        expect(component).toBeTruthy()
    }),

    it("Espera-se que liste um card para cada pet", async () => {
        const component = mount(Pets)

        await flushPromises()

        expect(component.text()).toContain('Cat')
        expect(component.text()).toContain('Dog')

        expect(component.findAll("[data-test='item-pet']")).toHaveLength(2)


    })
    it("Espera-se que navegue para tela de perfil do pet clicado", async () => {

        const mockRouter = {
            push: vi.fn()
        }

        const component = mount(Pets, {
            global: {
                mocks:{
                    $router: mockRouter
                }
            }
        })

        await flushPromises()
        component.findAll("[data-test='item-pet']")[0].trigger("click")
        expect(mockRouter.push).toHaveBeenCalledWith('/pets-adocao/16/perfil')
    })
})
