import { mount } from "@vue/test-utils"
import { flushPromises  } from "@vue/test-utils"

import {describe, expect, it, vi} from "vitest";
import Profile from "./Profile.vue";
import PetService from '@/services/PetService'


describe("Tela Home", () => {

    const mockRoute = {
        params:{
            id:16
        }
    }

    vi.spyOn(PetService, 'getOnePet').mockResolvedValue({
        "id":16,
        "name": "Totó",
        "age": 12,
        "weight": 1,
        "size": "MEDIUM",
        "race": {
            "id":2,
            "name": "pit-bull",
        },
        "specie":{
            "id": 1,
            "name": "Gato",
        }
    })

    it("Espera-se que a tela seja renderizada", ()=>{
        const component = mount(Profile, {
            global: {
                mocks: {
                    $route: mockRoute
                }
            }
        })
        expect(component).toBeTruthy()
    })

    it("Espera-se que exiba as informações do pet", async ()=>{

        const mockRoute = {
            params:{
                id:16
            }
        }

        const component = mount(Profile, {
            global: {
                mocks: {
                    $route: mockRoute
                }
            }
        })

        await flushPromises()
        expect(component.text()).toContain("Amigo: Totó")
        expect(component.text()).toContain("Raça: pit-bull")
        expect(component.text()).toContain("Idade: 12")
        expect(component.text()).toContain("Peso: 1")
    })

    it("Espera-se que ao submeter o fomrulario seja enviado os dados corretamente", async ()=>{
        
        const adoptPet = vi.spyOn(PetService, 'adoptPet').mockResolvedValue({})

        const component = mount(Profile, {
            global: {
                mocks: {
                    $route: mockRoute
                }
            }
        })
        await flushPromises()

        component.get("[data-test='input-name']").setValue("Dona Maria")
        component.get("[data-test='input-contact']").setValue("4002-8922")
        component.get("[data-test='input-email']").setValue("donamaria@hotmail.com")
        component.get("[data-test='textarea-observations']").setValue("gosto de gato")
        component.get("[data-test='submit-button']").trigger("submit")

        expect(adoptPet).toBeCalledWith({
            name: 'Dona Maria',
            email: 'donamaria@hotmail.com',
            contact: '4002-8922',
            observations: 'gosto de gato',

        })
    })
})
